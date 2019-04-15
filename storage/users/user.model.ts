class UserModel {
    userId: string;
    email: string;
    name: string;
    static tableName: string = 'Users';

    constructor(userId: string, email: string, name: string) {
      this.userId = userId;
      this.email = email;
      this.name = name;
    }
}
  
export { UserModel };
