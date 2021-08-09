const path = require('path')

module.exports = {
	webpack: (config, { buildId, dev, isServer, webpack }) => {

		const alias = {
			//"@functions": path.join(__dirname,'functions'),
			"@libs": path.join(__dirname,'libs'),
			//"@services": path.join(__dirname,'services'),
			// "@shared": path.join(__dirname,'shared'),
			"@pages": path.join(__dirname,'pages'),
			"@svg": path.join(__dirname,'svg')
		}
		Object.assign(config.resolve.alias,alias)
    /*
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
      exclude: [ alias['@svg'] ]
    })
    */	 
    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset/source',
      /*
      use: [
        { loader: 'raw-loader',
          options: { esModule: false }, 
        }
      ],
      */
      include: [ alias['@svg'] ]
    })
		return config
	},

	eslint: {
		// Warning: Dangerously allow production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
}
