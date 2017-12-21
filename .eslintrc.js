module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/strongly-recommended'
        // 'plugin:vue/essential'
        // 'plugin:vue/essential'
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        "vue/max-attributes-per-line": [2, {
            "singleline": 3,
            "multiline": {
                "max": 1,
                "allowFirstLine": true
            }
        }],
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "never",
                "normal": "always",
                "component": "any"
            },
            "svg": "always",
            "math": "always"
        }]

    }
}
