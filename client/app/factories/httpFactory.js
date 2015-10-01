app.factory( 'httpFactory', [ '$http', function ( $http ) {

  //Sends request to server and retrieves sequencer for given level
  var requests = {};

  requests.getSequencer = function ( level, callback ) {

    return $http.get( '/levels/' + level.toString( ) )

      .then( function( response ) {

        callback( response );

      });

  };

  requests.postSequencer = function ( level, stringifiedSequencer, callback ) {

    return $http.post( '/levels/', { level: level, data: stringifiedSequencer } )

      .then( function( response ) {

        if( callback ) {

          callback( response );
          
        }

      });

  };

  requests.putSequencer = function ( level, stringifiedSequencer, callback ) {

    return $http.put( '/levels/', { level: level, data: stringifiedSequencer } )

      .then( function ( response ) {

        if( callback ) {

          callback( response );

        }

      });

  };

  requests.loginUser = function ( user ) {

    return $http.post( '/login', { username: user.username, password: user.password } )
      .then( function (response ) {

        if ( callback ) {

          callback( response );

        }

      });

  };

  requests.signupUser = function ( user ) {

    return $http.post( '/signup', { username: user.username, password: user.password } )
      .then( function (response ) {

        if ( callback ) {

          callback( response );

        }

      });

  };

  return requests;

}]);
