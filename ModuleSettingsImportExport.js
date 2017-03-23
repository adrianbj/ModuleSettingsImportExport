$(document).ready(function() {

    $("#Inputfield_moduleSettings").on("focus", function () {
       $(this).select();
    });

    $("#Inputfield_allModuleSettings").on("focus", function () {
       $(this).select();
    });

	var allModuleSettings = ProcessWire.config ? ProcessWire.config.allModuleSettings : config.allModuleSettings;

    $("input[name='selectedModules[]']").on('change', function() {

    	var settingsJson = {};

		$("input[name='selectedModules[]']").each(function() {
			if($(this).is(':checked')) {
				settingsJson[$(this).val()] = {};
				settingsJson[$(this).val()]['version'] = JSON.parse(allModuleSettings[$(this).val()])[$(this).val()]['version'];
				settingsJson[$(this).val()]['settings'] = JSON.parse(allModuleSettings[$(this).val()])[$(this).val()]['settings'];
			}
		});

		$('#Inputfield_allModuleSettings').val(JSON.stringify(settingsJson));

    });

});

