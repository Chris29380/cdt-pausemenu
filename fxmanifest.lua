--[[ Manifest ]]--
fx_version   'cerulean'
use_experimental_fxv2_oal 'no'
lua54        'yes'
games        {'gta5'}

dependencies {}

shared_scripts {
    '@es_extended/imports.lua',
    'shared/*.lua'
}
    
server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server/*.lua',
}

client_scripts {
    'client/*.lua',
}

ui_page 'html/index.html'

files {
	'html/*.html',
	'html/js/*.js',
	'html/css/*.css',
    'html/img/*.png',
}
