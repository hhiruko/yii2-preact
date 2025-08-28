<?php

declare(strict_types=1);

namespace app\assets;

use yii\web\AssetBundle;

class ViteAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [];
    public $js = [];
    public $jsOptions = [
        'type' => 'module',
        'defer' => true,
    ];

    public function init(): void
    {
        parent::init();

        if (YII_ENV_DEV) {
            // Vite dev server
            $this->js[] = 'http://localhost:5173/@vite/client';
            $this->js[] = 'http://localhost:5173/main.jsx';
        } else {
            // Production build
            $this->basePath = '@webroot/dist';
            $this->baseUrl = '@web/dist';
            $this->js[] = 'main.js';
            $this->css[] = 'style.css';
        }
    }

    public static function initReact(): string
    {
        return '
            <script type="module">
                import RefreshRuntime from \'http://localhost:5173/@react-refresh\'
                RefreshRuntime.injectIntoGlobalHook(window)
                window.$RefreshReg$ = () => {}
                window.$RefreshSig$ = () => (type) => type
                window.__vite_plugin_react_preamble_installed__ = true
            </script>
        ';
    }
}