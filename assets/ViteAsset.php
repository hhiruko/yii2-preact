<?php

declare(strict_types=1);

namespace app\assets;

use Yii;
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
            $viteServer = Yii::$app->params['viteServer'];

            $this->js[] = $viteServer . '/@vite/client';
            $this->js[] = $viteServer . '/main.jsx';
        } else {
            // Production build
            $manifestPath = \Yii::getAlias('@webroot/dist/.vite/manifest.json');
            $manifest = json_decode(file_get_contents($manifestPath), true);

            $entry = $manifest['main.jsx'];

            $this->basePath = '@webroot/dist';
            $this->baseUrl = '@web/dist';

            $this->js[] = $entry['file'];
            if (!empty($entry['css'])) {
                foreach ($entry['css'] as $cssFile) {
                    $this->css[] = $cssFile;
                }
            }
        }
    }
}