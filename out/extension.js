"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const template_1 = require("./utils/template");
const el_row_1 = __importDefault(require("./components/el-row"));
const el_col_1 = __importDefault(require("./components/el-col"));
const el_button_group_1 = __importDefault(require("./components/el-button-group"));
const el_button_1 = __importDefault(require("./components/el-button"));
const el_container_1 = __importDefault(require("./components/el-container"));
const el_header_1 = __importDefault(require("./components/el-header"));
const el_footer_1 = __importDefault(require("./components/el-footer"));
const el_aside_1 = __importDefault(require("./components/el-aside"));
const el_icon_1 = __importDefault(require("./components/el-icon"));
const el_link_1 = __importDefault(require("./components/el-link"));
const el_text_1 = __importDefault(require("./components/el-text"));
const el_scrollbar_1 = __importDefault(require("./components/el-scrollbar"));
const el_space_1 = __importDefault(require("./components/el-space"));
const el_autocomplete_1 = __importDefault(require("./components/el-autocomplete"));
const el_cascader_1 = __importDefault(require("./components/el-cascader"));
const el_cascader_panel_1 = __importDefault(require("./components/el-cascader-panel"));
const el_color_picker_1 = __importDefault(require("./components/el-color-picker"));
const el_checkbox_group_1 = __importDefault(require("./components/el-checkbox-group"));
const el_checkbox_1 = __importDefault(require("./components/el-checkbox"));
const el_date_picker_1 = __importDefault(require("./components/el-date-picker"));
const el_form_item_1 = __importDefault(require("./components/el-form-item"));
const el_form_1 = __importDefault(require("./components/el-form"));
const el_input_1 = __importDefault(require("./components/el-input"));
const el_input_number_1 = __importDefault(require("./components/el-input-number"));
const el_mention_1 = __importDefault(require("./components/el-mention"));
const el_radio_group_1 = __importDefault(require("./components/el-radio-group"));
const el_radio_button_1 = __importDefault(require("./components/el-radio-button"));
const el_radio_1 = __importDefault(require("./components/el-radio"));
const el_rate_1 = __importDefault(require("./components/el-rate"));
const el_select_1 = __importDefault(require("./components/el-select"));
const el_option_1 = __importDefault(require("./components/el-option"));
const el_option_group_1 = __importDefault(require("./components/el-option-group"));
const el_select_v2_1 = __importDefault(require("./components/el-select-v2"));
const el_slider_1 = __importDefault(require("./components/el-slider"));
const el_switch_1 = __importDefault(require("./components/el-switch"));
const el_time_picker_1 = __importDefault(require("./components/el-time-picker"));
const el_time_select_1 = __importDefault(require("./components/el-time-select"));
const el_transfer_1 = __importDefault(require("./components/el-transfer"));
const el_tree_select_1 = __importDefault(require("./components/el-tree-select"));
const el_upload_1 = __importDefault(require("./components/el-upload"));
const el_avatar_1 = __importDefault(require("./components/el-avatar"));
const el_badge_1 = __importDefault(require("./components/el-badge"));
const el_calendar_1 = __importDefault(require("./components/el-calendar"));
const el_card_1 = __importDefault(require("./components/el-card"));
const el_carousel_1 = __importDefault(require("./components/el-carousel"));
const el_carousel_item_1 = __importDefault(require("./components/el-carousel-item"));
const el_collapse_item_1 = __importDefault(require("./components/el-collapse-item"));
const el_collapse_1 = __importDefault(require("./components/el-collapse"));
const el_descriptions_item_1 = __importDefault(require("./components/el-descriptions-item"));
const el_descriptions_1 = __importDefault(require("./components/el-descriptions"));
const el_empty_1 = __importDefault(require("./components/el-empty"));
const el_image_viewer_1 = __importDefault(require("./components/el-image-viewer"));
const el_image_1 = __importDefault(require("./components/el-image"));
const el_pagination_1 = __importDefault(require("./components/el-pagination"));
const el_progress_1 = __importDefault(require("./components/el-progress"));
const el_result_1 = __importDefault(require("./components/el-result"));
const el_skeleton_item_1 = __importDefault(require("./components/el-skeleton-item"));
const el_skeleton_1 = __importDefault(require("./components/el-skeleton"));
const el_table_column_1 = __importDefault(require("./components/el-table-column"));
const el_table_1 = __importDefault(require("./components/el-table"));
const el_table_v2_1 = __importDefault(require("./components/el-table-v2"));
const el_check_tag_1 = __importDefault(require("./components/el-check-tag"));
const el_tag_1 = __importDefault(require("./components/el-tag"));
const el_timeline_item_1 = __importDefault(require("./components/el-timeline-item"));
const el_tour_1 = __importDefault(require("./components/el-tour"));
const el_tour_step_1 = __importDefault(require("./components/el-tour-step"));
const el_tree_1 = __importDefault(require("./components/el-tree"));
const el_tree_v2_1 = __importDefault(require("./components/el-tree-v2"));
const el_statistic_1 = __importDefault(require("./components/el-statistic"));
const el_segmented_1 = __importDefault(require("./components/el-segmented"));
const el_affix_1 = __importDefault(require("./components/el-affix"));
const el_breadcrumb_item_1 = __importDefault(require("./components/el-breadcrumb-item"));
const el_breadcrumb_1 = __importDefault(require("./components/el-breadcrumb"));
const el_menu_item_group_1 = __importDefault(require("./components/el-menu-item-group"));
const el_sub_menu_1 = __importDefault(require("./components/el-sub-menu"));
const el_menu_1 = __importDefault(require("./components/el-menu"));
const el_page_header_1 = __importDefault(require("./components/el-page-header"));
const el_step_1 = __importDefault(require("./components/el-step"));
const el_steps_1 = __importDefault(require("./components/el-steps"));
const el_tab_pane_1 = __importDefault(require("./components/el-tab-pane"));
const el_tabs_1 = __importDefault(require("./components/el-tabs"));
const el_alert_1 = __importDefault(require("./components/el-alert"));
const el_dialog_1 = __importDefault(require("./components/el-dialog"));
const el_drawer_1 = __importDefault(require("./components/el-drawer"));
const el_popconfirm_1 = __importDefault(require("./components/el-popconfirm"));
const el_popover_1 = __importDefault(require("./components/el-popover"));
const el_tooltip_1 = __importDefault(require("./components/el-tooltip"));
const el_divider_1 = __importDefault(require("./components/el-divider"));
const el_backtop_1 = __importDefault(require("./components/el-backtop"));
const el_dropdown_1 = __importDefault(require("./components/el-dropdown"));
const el_input_tag_1 = __importDefault(require("./components/el-input-tag"));
const el_anchor_link_1 = __importDefault(require("./components/el-anchor-link"));
const el_anchor_1 = __importDefault(require("./components/el-anchor"));
function activate(context) {
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('html', {
        provideCompletionItems(document, position) {
            /**
             * 定义支持的组件
             */
            const components = [
                el_button_group_1.default,
                el_button_1.default,
                el_container_1.default,
                el_header_1.default,
                el_footer_1.default,
                el_aside_1.default,
                el_icon_1.default,
                el_link_1.default,
                el_text_1.default,
                el_scrollbar_1.default,
                el_space_1.default,
                el_autocomplete_1.default,
                el_cascader_panel_1.default,
                el_cascader_1.default,
                el_color_picker_1.default,
                el_checkbox_group_1.default,
                el_checkbox_1.default,
                el_date_picker_1.default,
                el_form_item_1.default,
                el_form_1.default,
                el_input_number_1.default,
                el_input_tag_1.default,
                el_input_1.default,
                el_mention_1.default,
                el_radio_group_1.default,
                el_radio_button_1.default,
                el_radio_1.default,
                el_rate_1.default,
                el_select_v2_1.default,
                el_select_1.default,
                el_option_group_1.default,
                el_option_1.default,
                el_collapse_item_1.default,
                el_collapse_1.default,
                el_row_1.default,
                el_col_1.default,
                el_slider_1.default,
                el_switch_1.default,
                el_time_picker_1.default,
                el_time_select_1.default,
                el_transfer_1.default,
                el_tree_select_1.default,
                el_upload_1.default,
                el_avatar_1.default,
                el_badge_1.default,
                el_calendar_1.default,
                el_card_1.default,
                el_carousel_item_1.default,
                el_carousel_1.default,
                el_descriptions_item_1.default,
                el_descriptions_1.default,
                el_empty_1.default,
                el_image_viewer_1.default,
                el_image_1.default,
                el_pagination_1.default,
                el_progress_1.default,
                el_result_1.default,
                el_skeleton_item_1.default,
                el_skeleton_1.default,
                el_table_v2_1.default,
                el_table_column_1.default,
                el_table_1.default,
                el_check_tag_1.default,
                el_tag_1.default,
                el_timeline_item_1.default,
                el_tour_step_1.default,
                el_tour_1.default,
                el_tree_1.default,
                el_tree_v2_1.default,
                el_statistic_1.default,
                el_segmented_1.default,
                el_affix_1.default,
                el_anchor_link_1.default,
                el_anchor_1.default,
                el_backtop_1.default,
                el_breadcrumb_item_1.default,
                el_breadcrumb_1.default,
                el_dropdown_1.default,
                el_menu_item_group_1.default,
                el_sub_menu_1.default,
                el_menu_1.default,
                el_page_header_1.default,
                el_steps_1.default,
                el_step_1.default,
                el_tab_pane_1.default,
                el_tabs_1.default,
                el_alert_1.default,
                el_dialog_1.default,
                el_drawer_1.default,
                el_popconfirm_1.default,
                el_popover_1.default,
                el_tooltip_1.default,
                el_divider_1.default
            ];
            /**
             * 提取行前缀
             */
            let linePrefix = document.lineAt(position).text.substring(0, position.character);
            linePrefix = '<' + linePrefix.split('<').pop();
            /**
             * 生成标准的 CompletionItem 提示框
             */
            const renderCompletionItems = (data, isEvent = false) => {
                const res = data.map((item, index) => {
                    const key = isEvent ? item.key.replace('@', '') : item.key;
                    const instance = new vscode.CompletionItem(`${item.key}⚡`, vscode.CompletionItemKind.Property);
                    let insertText = '';
                    // 如果是事件，不需要补前缀
                    if (isEvent) {
                        insertText = key;
                    }
                    // 如果是属性，则要判断补前缀
                    if (!isEvent) {
                        if (String(item.type).startsWith('string')) {
                            insertText = key;
                        }
                        // 字符串以外，都视为 v-bind
                        if (String(item.type).startsWith('string') === false) {
                            insertText = ':' + key;
                        }
                        // 如果是 v-model 不需要补
                        if (item.key === 'v-model') {
                            insertText = key;
                        }
                    }
                    instance.insertText = new vscode.SnippetString(insertText + '="${1:value}"');
                    instance.sortText = String(index);
                    instance.documentation = new vscode.MarkdownString((0, template_1.markdownString)(item));
                    return instance;
                });
                return res;
            };
            /**
             * 触发组件事件和属性提示
             */
            for (const component of components) {
                if (new RegExp(`(<${component.key})(.*)(@)$`, 'i').test(linePrefix)) {
                    // 注册事件
                    return renderCompletionItems(component.event, true);
                }
                if (new RegExp(`(<${component.key})(.*)$`, 'i').test(linePrefix)) {
                    if (new RegExp(`<[^<>]+>`, 'i').test(linePrefix) === false) {
                        // 注册属性
                        return renderCompletionItems(component.attr);
                    }
                }
            }
        }
    }, '@', ' '));
}
function deactivate() { }
//# sourceMappingURL=extension.js.map