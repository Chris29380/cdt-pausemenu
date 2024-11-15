
-- locals

local pausemenu_opend = false
local playerd, hunger, thirst

RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function(xPlayer)
    ESX.PlayerData = xPlayer
	ESX.PlayerLoaded = true
    Citizen.Wait(1000)
    -- call triggers    
    TriggerEvent("cdtpm:initpm")
    TriggerEvent("cdtpm:getdatas")
end)

RegisterNetEvent('esx:onPlayerLogout')
AddEventHandler('esx:onPlayerLogout', function()
    ESX.PlayerLoaded = false
	ESX.PlayerData = {}
end)


RegisterNetEvent('onResourceStart')
AddEventHandler('onResourceStart', function(resourceName)
    if (GetCurrentResourceName() == resourceName) then 
        Citizen.Wait(300)
        -- call trigger
        TriggerEvent("cdtpm:initpm")
        TriggerEvent("cdtpm:getdatas")
    end
end)

RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(job)
	ESX.PlayerData.job = job
end)

--------------------------------------------------------------------
---
--------------------------------------------------------------------

RegisterKeyMapping("pausemenu", "Pause Menu", "keyboard", "p")

RegisterCommand('pausemenu',function()
    TriggerServerEvent("cdtpm:getdatap")
end, false)

RegisterNetEvent("cdtpm:startpm")
AddEventHandler("cdtpm:startpm", function (ping)
    SendNUIMessage(
        {
            type = "showPm",
            playerd = playerd,
            idp = GetPlayerServerId(PlayerId()),
            ping = ping,
            hunger = hunger,
            thirst = thirst,
            health = GetEntityHealth(PlayerPedId()),
            actjob2 = Options.job2,
        }
    )
    SetNuiFocus(true,true)
end)

RegisterNetEvent("cdtpm:closepm")
AddEventHandler("cdtpm:closepm", function ()
    SendNUIMessage(
        {
            type = "hidePm",
        }
    )
    SetNuiFocus(false,false)
end)

RegisterNuiCallback("closePm", function ()
    SetNuiFocus(false,false)
end)

RegisterNetEvent("cdtpm:initpm")
AddEventHandler("cdtpm:initpm", function ()
    CreateThread(function()
        while true do
            Wait(1)
            SetPauseMenuActive(false)
        end
    end)
end)

RegisterNUICallback("map", function()
    TriggerEvent("cdtpm:closepm")
    ActivateFrontendMenu(GetHashKey('FE_MENU_VERSION_SP_PAUSE'), 0, -1)
end)

--------------------------------------------------------------------
--- datas
--------------------------------------------------------------------

RegisterNetEvent("cdtpm:getdatas")
AddEventHandler("cdtpm:getdatas", function ()
    playerd = ESX.GetPlayerData()
end)

RegisterNetEvent('esx_status:onTick', function(status)
    for _, v in pairs(status) do
        local value = math.floor(v.percent or 0)
        if v.name == 'hunger' then
            hunger = value
        elseif v.name == 'thirst' then
            thirst = value
        end
    end
end)