if (typeof gf_global == 'undefined') var gf_global = {
	"gf_currency_config": {
		"name": "U.S. Dollar",
		"symbol_left": "$",
		"symbol_right": "",
		"symbol_padding": "",
		"thousand_separator": ",",
		"decimal_separator": ".",
		"decimals": 2
	},
	"base_url": "http:\/\/l.wrs.com\/wp-content\/plugins\/gravityforms",
	"number_formats": [],
	"spinnerUrl": "http:\/\/l.wrs.com\/wp-content\/plugins\/gravityforms\/images\/spinner.gif"
};
jQuery(document).bind('gform_post_render', function(event, formId, currentPage) {
	if (formId == 1) {
		gf_global["number_formats"][1] = {
			"2": false,
			"4": false,
			"1": false,
			"3": false
		};
		if (window['jQuery']) {
			if (!window['gf_form_conditional_logic']) { window['gf_form_conditional_logic'] = new Array() };
			window['gf_form_conditional_logic'][1] = {
				logic: {
					4: {
						"field": {
							"actionType": "hide",
							"logicType": "all",
							"rules": [{
								"fieldId": "2",
								"operator": "is",
								"value": ""
							}]
						},
						"nextButton": null,
						"section": null
					}
				},
				dependents: {
					4: [4]
				},
				animation: 0,
				defaults: {
					"1": {
						"1": "",
						"1.2": ""
					}
				},
				fields: {
					"2": [4],
					"4": [],
					"1": [],
					"3": []
				}
			};
			if (!window['gf_number_format']) { window['gf_number_format'] = 'decimal_dot' };
			jQuery(document).ready(function() {
				gf_apply_rules(1, [4], true);
				jQuery('#gform_wrapper_1').show();
				jQuery(document).trigger('gform_post_conditional_logic', [1, null, true]);
			});
		}
		if (typeof Placeholders != 'undefined') {
			Placeholders.enable();
		}
	}
});


jQuery(document).bind('gform_post_conditional_logic', function(event, formId, fields, isInit) {});


jQuery(document).ready(function() { jQuery(document).trigger('gform_post_render', [1, 1]) });