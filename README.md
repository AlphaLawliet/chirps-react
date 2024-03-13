Guide for cloning and run this project

---

# Laravel with Inertia.js Project

This repository contains a starter Laravel project integrated with Inertia.js for building modern, single-page applications.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

Before you begin, make sure you have the following installed on your local development machine:

-   [PHP](https://www.php.net/) (>= 7.4 recommended)
-   [Composer](https://getcomposer.org/)
-   [Node.js](https://nodejs.org/)
-   [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (optional, but recommended)
-   [Git](https://git-scm.com/)

### Cloning the Repository

Clone this repository to your local machine using the following command:

```bash
git clone <repository_url>
```

### Installation

1. Navigate to the project directory:

```bash
cd <project_directory>
```

2. Install PHP dependencies using Composer:

```bash
composer install
```

3. Install JavaScript dependencies using NPM or Yarn:

```bash
npm install
# or
yarn install
```

### Configuration

1. Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

2. Generate an application key:

```bash
php artisan key:generate
```

### Development

To start the development server, run:

```bash
php artisan serve
```

This will start a development server at `http://localhost:8000`.

Sure, here's the guide formatted for a GitHub README file:

---

## Installing SQLite on Windows

1. **Download SQLite Precompiled Binaries**:

    - Visit the [SQLite Download](https://www.sqlite.org/download.html) page.
    - Under "Precompiled Binaries for Windows", download the appropriate zip file for your system architecture (either 32-bit or 64-bit).

2. **Extract the Zip File**:

    - Once the download is complete, extract the contents of the zip file to a location on your computer (e.g., `C:\sqlite`).

3. **Set Up Environment Variables**:

    - Right-click on "This PC" or "My Computer" and select "Properties".
    - Click on "Advanced system settings" and then "Environment Variables".
    - Under "System variables", select "Path" and click "Edit".
    - Add the path to the folder where SQLite is installed (e.g., `C:\sqlite`) to the list of paths.
    - Click "OK" to save the changes.

4. **Verify Installation**:
    - Open Command Prompt and type `sqlite3`. If SQLite is installed correctly, you should see the SQLite prompt.

## Installing SQLite on macOS

1. **Install via Homebrew** (recommended):

    - If you don't have Homebrew installed, you can install it by following the instructions on the [Homebrew website](https://brew.sh/).
    - Once Homebrew is installed, open Terminal and run the following command to install SQLite:

        ```bash
        brew install sqlite
        ```

2. **Verify Installation**:
    - After installation, you can verify that SQLite is installed by typing `sqlite3` in Terminal. You should see the SQLite prompt if it's installed correctly.

## Installing SQLite DB Browser

1. **Download SQLite DB Browser**:

    - Visit the [SQLite DB Browser](https://sqlitebrowser.org/dl/) download page.
    - Download the appropriate version for your operating system.

2. **Install SQLite DB Browser**:

    - Once the download is complete, follow the installation instructions provided for your operating system.

3. **Open SQLite DB Browser**:
    - After installation, open SQLite DB Browser. You can usually find it in your applications or start menu.

Now you have SQLite installed on your system, and you can manage your SQLite databases with SQLite DB Browser.

### Additional Resources

-   [Laravel Documentation](https://laravel.com/docs)
-   [Inertia.js Documentation](https://inertiajs.com/)
-   [Vue.js Documentation](https://vuejs.org/v2/guide/)

## Contributing

If you'd like to contribute to this project, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize this README according to your project's specific details and requirements.
