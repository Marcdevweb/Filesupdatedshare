

export function signup() {
    return {
        user: null,
        init() {
            this.user = Alpine.store('currentUser')
        },
        async createUserWithPass() {
            try {
               const result = await this.createUserWithPass(auth, email, password)
            } catch (error) {

            }
        },
       async signInWithGoogle() {
            try {
                const result = await signInWithPopup(auth, provider);
                this.user = result.user;
                console.log(this.user)
                return this.user;
              } catch (error) {
                console.error("Error signing in: ", error);
                throw error;
              }
        },
        signOut() {
            firebase.auth().signOut()
                .then(() => {
                    this.user = null;
                }).catch((error) => {
                    console.error(error);
                });
        }
    };
}