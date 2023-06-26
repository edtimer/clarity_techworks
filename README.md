<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Running this project

- This clarity techworks assessment requires docker

start with running the setup.sh script
```sh
./setup.sh
```
after it completes then navigate to the created folder and run it would ask for admin password / sudo pass to run chmod
```
./vendor/bin/sail up  spin up
```
the following commands would help during the evaluation of the system I made

```
alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail' * an alias for sail so we can say sail up or sail up -d


sail composer require laravel/jetstream // to get jetstream



sail artisan jetstream:install inertia //this will scafold the jetstream application

sail npm install && sail npm run dev //to get the dependencies

```

got an error cant resolve laravel vite plugin so did the following
```
sail npm install --save-dev vite laravel-vite-plugin
sail npm install --save-dev @vitejs/plugin-vue
```

-migration
```
sail artisan migrate //run the migration
```
- seeding users
```
sail artisan tin //can be used to create an account


User::factory()->create(); //using tin to create an account
```
Running the factory using tin would console.log this
{
  name: "Billy Farrell",
    email: "hlangosh@example.net",
    email_verified_at: "2023-06-25 13:25:30",
    #password: "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",    #two_factor_secret: null,
    #two_factor_recovery_codes: null,
    #remember_token: "0GE7gZ1lGG",
    profile_photo_path: null,
    current_team_id: null,
    updated_at: "2023-06-25 13:25:30",
    created_at: "2023-06-25 13:25:30",
    id: 1,
    +profile_photo_url: "https://ui-avatars.com/api/?name=B+F&color=7F9CF5&background=EBF4FF",
  }

```
  
  artisan config:clear //clearing config
  artisan cache:clear //clearing cache
```
creating a Seeder for books
``` 
sail artisan make:seeder BookSeeder
```

-my books schema with full text indexing
```
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('isbn')->unique()->fullText();
            $table->string('name')->fullText();
            $table->string('genre');
            $table->string('author');
            $table->string('description',400);
            $table->timestamps();
        });
        
```
- To build and run the application use 
```
 sail npm run build
```
Abdulla Adam 2023

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 2000 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[OP.GG](https://op.gg)**
- **[WebReinvent](https://webreinvent.com/?utm_source=laravel&utm_medium=github&utm_campaign=patreon-sponsors)**
- **[Lendio](https://lendio.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
