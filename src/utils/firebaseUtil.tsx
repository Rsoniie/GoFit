import auth from '@react-native-firebase/auth';

export default class firebaseUtil {
    public static signin = (email: string, password: string) => 
    {
        return auth().signInWithEmailAndPassword(email, password);
    };
    public static signup = (email: string, password: string) => 
    {
        return auth().createUserWithEmailAndPassword(email, password);  
    };
    public static signout = () => 
    {
        return  auth().signOut();
    };
    public static delete = () => 
    {
        const user = auth().currentUser;
        return user?.delete();
    }
}