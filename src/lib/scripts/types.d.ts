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
  challengeContent: ChallengeContent
};

type ChallengeContent = {
  id: number
  challengeId: number
  tools: string[]
  acceptanceCriteria: string[]
  instructions: string[]
  stretchGoals: string[]
};
