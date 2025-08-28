<p align="center">
    <a href="https://github.com/yiisoft" target="_blank">
        <img src="https://avatars0.githubusercontent.com/u/993323" height="100px">
    </a>
    <a href="https://github.com/preactjs" target="_blank">
        <img src="https://preactjs.com/branding/symbol.png" height="100px">
    </a>
    <h1 align="center">Yii 2 + Preact</h1>
    <br>
</p>

This is a proof-of-concept project showing how to integrate **Yii 2 (PHP)** with a modern **frontend stack** using **Vite**, **Inertia.js**, and **Preact**.

## 🤔 WHY?

At my day job, I get to build full-stack websites with PHP and Yii2, but I’ve never been a fan of most PHP templating engines. That’s why I usually stick with plain `.php` view files. At the same time, I really like working with `.jsx`. JSX makes it easy to structure views into reusable components, and since it’s just JavaScript, you can use logic and interactivity right away.

Of course, you can still include JavaScript with `<script>` tags in PHP, but that often leads to splitting `.php` and `.js` files apart, which adds friction. On top of that, linting and static analysis don’t really integrate well. By writing views entirely in `.jsx`, we avoid the limitations of PHP templating while gaining the benefits of modern component-based design.

I even explored this idea in a separate proof-of-concept project, where I built JSX-inspired PHP components for rendering views ([php-components](https://github.com/hhiruko/php-components)). But using Yii2 together with Vite + Inertia.js + Preact feels like the more natural solution.

I specifically chose Preact because it’s lightweight, more performant than React, and remains compatible with most React technologies. Also because I like it a lot.
## ⚙️ STACK

- **Backend**: [Yii2 Framework](https://www.yiiframework.com/) (classic MVC PHP framework)
- **Bundler**: [Vite](https://vitejs.dev/) (Build tool)
- **Adapter**: [Inertia.js](https://inertiajs.com/) (Modern monolith)
- **Frontend**: [Preact](https://preactjs.com/) (React alternative, smaller & faster)

## 🛠 INSTALLATION

### 1. Clone project & install dependencies:
```sh
git clone https://github.com/hhiruko/yii2-preact.git yii2-preact
cd yii2-preact
composer install
npm install
```

### 2. Run Yii2 dev server:
```sh
php yii serve
```

### 3. Run Vite dev server:
```sh
npm run dev
```

There is no need to run a dedicated frontend server on a production server. Build the assets, and they will be served via your backend server.