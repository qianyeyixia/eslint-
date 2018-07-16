module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"sourceType": "module",
		"ecmaVersion": 6,
		"ecmaFeatures": {}
	},
	"rules":{
		"vars-on-top": 2,//var必须放在作用域顶部
		"id-match": 0,//命名检测
		"indent": [2, 4],//缩进风格
		"no-redeclare": 2,//禁止重复声明变量
		"no-irregular-whitespace": 2,//不能有不规则的空格
		"no-invalid-regexp": 2,//禁止无效的正则表达式
		"no-implied-eval": 2,//禁止使用隐式eval
		"no-extra-semi": 2,//禁止多余的冒号
		"no-extra-parens": 2,//禁止非必要的括号
	}

}