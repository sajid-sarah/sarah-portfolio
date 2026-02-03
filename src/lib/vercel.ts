type VercelProject = {
  id: string;
  name: string;
  framework?: string | null;
  updatedAt?: number;
};

type VercelDeployment = {
  url: string | null;
  createdAt: number;
  target?: "production" | "preview";
  name?: string;
};

const API_BASE = "https://api.vercel.com";

function authHeaders() {
  const token = process.env.VERCEL_TOKEN;
  if (!token) throw new Error("Missing VERCEL_TOKEN in environment variables.");
  return { Authorization: `Bearer ${token}` };
}

function withTeam(url: string) {
  const teamId = process.env.VERCEL_TEAM_ID;
  if (!teamId) return url;
  const u = new URL(url);
  u.searchParams.set("teamId", teamId);
  return u.toString();
}

export async function getVercelProjects(limit = 20): Promise<VercelProject[]> {
  // Docs: GET /v10/projects :contentReference[oaicite:2]{index=2}
  const res = await fetch(withTeam(`${API_BASE}/v10/projects?limit=${limit}`), {
    headers: authHeaders(),
    // cache server-side; refresh occasionally
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to fetch Vercel projects: ${res.status} ${text}`);
  }

  const json = (await res.json()) as { projects?: VercelProject[] };
  return json.projects ?? [];
}

export async function getLatestProdDeploymentUrl(
  projectId: string
): Promise<string | null> {
  // Docs: GET /v6/deployments :contentReference[oaicite:3]{index=3}
  const url = withTeam(
    `${API_BASE}/v6/deployments?projectId=${projectId}&target=production&limit=1`
  );

  const res = await fetch(url, {
    headers: authHeaders(),
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;

  const json = (await res.json()) as { deployments?: VercelDeployment[] };
  const dep = json.deployments?.[0];
  if (!dep?.url) return null;

  return `https://${dep.url}`;
}

export async function getDeployedProjects() {
  const projects = await getVercelProjects(50);

  // Fetch latest prod url for each (simple + safe)
  const enriched = await Promise.all(
    projects.map(async (p) => ({
      id: p.id,
      name: p.name,
      framework: p.framework ?? null,
      updatedAt: p.updatedAt ?? null,
      prodUrl: await getLatestProdDeploymentUrl(p.id),
    }))
  );

  // Keep only ones with a production URL
  return enriched
    .filter((p) => p.prodUrl)
    .sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0));
}
