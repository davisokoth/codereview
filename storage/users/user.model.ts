class UserModel {
    userId: string;
    email: string;
    name: string;
    login?: string;
    avatar_url?: string;
    url?: string;
    repo_url?: string;
    type?: string;
    score?: number;
    followers?: number;
    profile: string;
    
    static tableName: string = 'Users';

    constructor(userId: string, name: string, email: string, avatar_url: string, profile: string) {
      this.userId = userId;
      this.email = email;
      this.name = name;
      this.avatar_url = avatar_url;
      this.profile = profile;
    }
}
  
export { UserModel };
