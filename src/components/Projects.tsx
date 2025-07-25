import { useEffect, useState } from "react";
import { ExternalLink, Github, Star, Archive, GitBranch } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  archived: boolean;
  fork: boolean;
  private: boolean;
}

export function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/ratheesh-12/repos?sort=updated")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repositories");
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-12 text-lg">Loading GitHub projects...</div>;
  }
  if (error) {
    return <div className="text-center py-12 text-red-500">{error}</div>;
  }

  return (
    <section className="py-20 bg-background" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            My GitHub Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my public repositories, fetched live from my GitHub profile.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <Card key={repo.id} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-primary" />
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="font-bold text-lg group-hover:text-primary transition-colors">
                      {repo.name}
                    </a>
                  </div>
                  <div className="flex gap-2">
                    {repo.archived && <Badge className="bg-gray-500 text-white flex items-center"><Archive className="w-3 h-3 mr-1" />Archived</Badge>}
                    {repo.fork && <Badge className="bg-yellow-500 text-white flex items-center"><GitBranch className="w-3 h-3 mr-1" />Fork</Badge>}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {repo.language && <span className="text-sm text-muted-foreground mr-2">{repo.language}</span>}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {repo.description || "No description provided."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">{repo.stargazers_count}</span>
                </div>
              </CardContent>
              <CardFooter>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
                  <ExternalLink className="w-4 h-4" />
                  View on GitHub
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}