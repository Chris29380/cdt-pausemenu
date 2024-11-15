-- locals

RegisterServerEvent('onResourceStart')
AddEventHandler('onResourceStart', function(resourceName)
    if (GetCurrentResourceName() == resourceName) then 
        -- call triggers
    end
end)

RegisterNetEvent("cdtpm:getdatap")
AddEventHandler("cdtpm:getdatap", function ()
    local xPlayer = ESX.GetPlayerFromId(source)    
    if xPlayer then
        local ping = GetPlayerPing(source)
        TriggerClientEvent("cdtpm:startpm", xPlayer.source, ping)
    else
        print('no xPlayer - cdtpm:getdatap')
    end
end)