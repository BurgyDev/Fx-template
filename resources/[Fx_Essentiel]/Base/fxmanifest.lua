fx_version 'adamant'

game 'gta5'

description 'ESX License'
lua54 'yes'
version '1.0'
legacyversion '1.9.1'

server_scripts {
	'@es_extended/imports.lua',
	'@oxmysql/lib/MySQL.lua',
	'esx_license/config.lua',
	'esx_license/server/main.lua',
	'esx_datastore/server/classes/datastore.lua',
	'esx_datastore/server/main.lua',
	'esx_addoninventory/server/classes/addoninventory.lua',
	'esx_addoninventory/server/main.lua',
	'esx_addonaccount/server/classes/addonaccount.lua',
	'esx_addonaccount/server/main.lua',
	'cron/server/main.lua',
}

server_exports {
    'GetSharedInventory',
    'AddSharedInventory',
	'GetSharedAccount',
    'AddSharedAccount',
}

shared_script 'async/async.lua'