function Alert(type, title, message, time)
	SendNUIMessage({
		action = 'notify',
		type = type,
        title = title,
        message = message,
        time = time
	})
end

RegisterNetEvent('413x-notify:Alert')
AddEventHandler('413x-notify:Alert', function(type, title, message, time)
	Alert(type, title, message, time)
end)

RegisterCommand("notify", function() 
	Alert("general", "General", "General Notification Message", 2000)
	Alert("info", "Info", "Info Notification Message", 2000)
	Alert("success", "Success", "Success Notification Message", 2000)
	Alert("error", "Error", "Error Notification Message", 2000)
	Alert("warning", "Warning", "Warning Notification Message", 2000)
	end, false )


exports['413x-notify']:Alert("info", "Info Notification Title", "Info Notification Message", 2000)	