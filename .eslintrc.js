module.exports = {
    "parser" : "babel-eslint",
    "plugins" : [],
    "extends" : "airbnb",
    "env": {
        "browser": true,
        "node": true
    },
    "rules" : {
        "arrow-parens": ["error", "as-needed"],
        "no-console" : [0],
        "no-mixed-operators": ["error", {
            "allowSamePrecedence": true
        }],
        "comma-dangle": ["error", "never"],
        "no-multi-spaces": [
            2,
            {
                "exceptions": {
                    "VariableDeclarator": true,
                    "Property": true,
                    "ImportDeclaration": true
                }
            }
        ],
        "indent": [2, {
            "SwitchCase": 1,
            "VariableDeclarator": 1
        }],
        "react/require-default-props": [0],
        "react/jsx-indent-props": [2],
        "react/jsx-indent": [2],
        "react/jsx-filename-extension": [0],
        "react/jsx-no-bind" : [2, {
            "allowArrowFunctions" : true
        }],
        "react/forbid-prop-types": [0],
        "jsx-a11y/no-static-element-interactions" : [0],
        "jsx-a11y/label-has-for": [0],
        "class-methods-use-this" : [0],
        "key-spacing": [0, {
            "beforeColon": false,
            "afterColon": true
        }],
        "max-len": ["error", 160, 2, {
            "ignoreUrls": true,
            "ignoreComments": false
        }],
        "import/no-absolute-path": [0],
        "import/extensions": ["error", "always", {
            "js": "never",
            "jsx": "never"
        }],
        "no-template-curly-in-string": [0],
        "no-plusplus": [0],
        "import/prefer-default-export": [0],
        "no-param-reassign": ["error", { "props": false }]
    }
};
