function getGraphQLRequest(nickname: string) {
  return JSON.stringify({ 
    query: `{ repositories(login: "${nickname}") { id, name, language, fork, size html_url } }`
  });
}

export async function httpWrapper(nickname: string) {
  const response = await fetch('https://nestjs-graphql.herokuapp.com/graphql', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: getGraphQLRequest(nickname)
  });
  const json = await response.json();
  return  json.data.repositories;
}

export function getFilteredProjects(projects: []) {
  const _projects: [] = [];
  projects.forEach((project: any) => {
    if (project.size > 0 && !project.fork) {
      project.name = project.name.split('-').join(' ');
      _projects.push(project)
    }
  });
  return _projects;
}