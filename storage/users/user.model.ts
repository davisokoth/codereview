class UserModel {
    userId: string;
    email: string;
    name: string;
    login?: string;
    avatar_url?: string;
    url?: string;
    repos_url?: string;
    received_events_url?: string;
    type?: string;
    score?: number;
    followers?: number;
    
    static tableName: string = 'Users';

    constructor(userId: string, name: string, email: string, avatar_url: string) {
      this.userId = userId;
      this.email = email;
      this.name = name;
      this.avatar_url = avatar_url;
    }
}
  
export { UserModel };
