//https://docs.fauna.com/fauna/current/tutorials/crud#database

const faunadb = require('faunadb'),
  q = faunadb.query;
  require('dotenv').config();

(async () =>{

    //console.log("Faunadb Admin Secret: " + process.env.FAUNADB_ADMIN_SECRET);

    var client = new faunadb.Client({ secret:process.env.FAUNADB_ADMIN_SECRET });
    
    //create database
    try {
      const result = await client.query(

        //Create Database
        //q.CreateDatabase({ name: 'mytestdatabase' })

        //Create Collection
        //q.CreateCollection({ name: 'Posts' })

        //Create Collection data
        /* q.CreateIndex({
        //     name: 'posts_by_title',
        //     source: q.Collection('Posts'),
        //     terms: [{ field: ['data', 'details'] }],
           })*/

        //Insert Data   
        // q.Create(
        //     q.Collection('Posts'),
        //     { data: { title: 'Learrning JamStack' } },
        // )
        
        //Insert Multiple Data
        // q.Map(
        //     [
        //       'Enjoying Weather',
        //       'learning Jamstack ',
        //       'Deep meanings in a AI',
        //     ],
        //     q.Lambda(
        //       'post_title',
        //       q.Create(
        //         q.Collection('Posts'),
        //         { data: { title: q.Var('post_title') } },
        //       )
        //     ),
        //   )

        //retrieve Data by index
        //q.Get(q.Ref(q.Collection('Posts'), '322957678077805131'))

        //retrieve Data by Title
        // q.Get(
        //     q.Match(q.Index('posts_by_title'), 'Enjoying Weather')
        // )

        //Update Data
        // q.Update(
        //     q.Ref(q.Collection('Posts'), '322957964747997769'),
        //     { data: { details: 'It is raining!' } },
        //   )

        //Delete Post
        //q.Delete(q.Ref(q.Collection('Posts'), '322957964747997769'))

        );
      console.log(result);
    } 
    catch (error){
        console.log(error);
      }
      
})();