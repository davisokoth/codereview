class UserModel {
    userId: string;
    email: string;
    name: string;
    static tableName: string = 'Users';

    constructor(userId: string, name: string, email: string) {
      this.userId = userId;
      this.email = email;
      this.name = name;
    }
}
  
export { UserModel };
