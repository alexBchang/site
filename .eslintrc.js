module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        'airbnb',
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "overrides": [
        {
            "files": ["*.ts", "*.tsx"],
            "rules": {
                "@typescript-eslint/explicit-function-return-type": "off",
                "import/no-unresolved": "off",
                "react/jsx-filename-extension": "off",
            }
        }
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        '@typescript-eslint',
        'react'
    ],
    "rules": {
        "linebreak-style": ["error", "windows"],
        "semi": ["error", "never"],
    },
    "settings": {
        "import/resolver": {
            "node": {
                "moduleDirectory": [
                    "node_modules",
                    "./"
                ]
            }
        }
    }
};