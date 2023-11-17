(() => {

     function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getUserBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    interface Movie {
        title:       string;
        description: string;
        rating:      number;
        cast:        string[]
    }
    function createMovie({title, description, rating, cast}: Movie) {
        console.log({ title, description, rating, cast });
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    // Continuacion

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) : number => {
        let result: number;
        if ( isDead ) result = 1500;        

        if ( isSeparated ) result = 2500;        
        
        return isRetired ? 3000 : 4000
   
    }

    


})();





