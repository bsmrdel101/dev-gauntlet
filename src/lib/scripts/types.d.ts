type User = {
  id: number
  username: string
  email?: string
  accessLevel: number
};

type Challenge = {
  id: number
  title: string
  desc: string
  difficulty: string
  image: string
  platform: string
};
