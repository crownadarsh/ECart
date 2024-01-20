module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE-HOST'),
      port: env('DATABASE-PORT'),
      database: env('DATABASE-NAME'),
      user: env('DATABASE-USERNAME'),
      password: env('DATABASE-PASSWORD'),
      ssl: env('DATABASE-SSL',true),
    }
  }
    
});
//yarn add @strapi/provider-upload-cloudinary