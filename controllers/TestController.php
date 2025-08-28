<?php

declare(strict_types=1);

namespace app\controllers;

use tebe\inertia\web\Controller;

class TestController extends Controller
{
    public function actionIndex()
    {
        $params = [
            'message' => 'Hello World!'
        ];
        return $this->inertia('Demo', $params);
    }
}