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
                el_input_1.default,
                el_mention_1.default,
                el_radio_group_1.default,
                el_radio_button_1.default,
                el_radio_1.default,
                el_rate_1.default,
                el_select_1.default,
                el_option_group_1.default,
                el_option_1.default,
                el_row_1.default,
                el_col_1.default
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
                    // 如果不是 string 类型，则补上 v-bind 即 : 前缀
                    const insertText = item.type === 'string' || item.type === 'Function' || item.type === 'enum' ? key : `:${key}`;
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