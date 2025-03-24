import * as vscode from 'vscode';
import { markdownString } from './utils/template';

import ElRow from './components/el-row';
import ElCol from './components/el-col';
import ElButtonGroup from './components/el-button-group';
import ElButton from './components/el-button';
import ElContainer from './components/el-container';
import ElHeader from './components/el-header';
import ElFooter from './components/el-footer';
import ElAside from './components/el-aside';
import ElIcon from './components/el-icon';

import ElLink from './components/el-link';
import ElText from './components/el-text';
import ElScrollbar from './components/el-scrollbar';
import ElSpace from './components/el-space';
import ElAutocomplete from './components/el-autocomplete';
import ElCascader from './components/el-cascader';
import ElCascaderPanel from './components/el-cascader-panel';
import ElColorPicker from './components/el-color-picker';
import ElCheckboxGroup from './components/el-checkbox-group';
import ElCheckbox from './components/el-checkbox';
import ElDatePicker from './components/el-date-picker';
import ElFormItem from './components/el-form-item';
import ElForm from './components/el-form';
import ElInput from './components/el-input';
import ElInputNumber from './components/el-input-number';
import ElMention from './components/el-mention';
import ElRadioGroup from './components/el-radio-group';
import ElRadioButton from './components/el-radio-button';
import ElRadio from './components/el-radio';
import ElRate from './components/el-rate';
import ElSelect from './components/el-select';
import ElOption from './components/el-option';
import ElOptionGroup from './components/el-option-group';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider(
            'html',
            {
                provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                    /**
                     * 定义支持的组件
                     */
                    const components = [
                        ElButtonGroup,
                        ElButton,
                        ElContainer,
                        ElHeader,
                        ElFooter,
                        ElAside,
                        ElIcon,
                        ElLink,
                        ElText,
                        ElScrollbar,
                        ElSpace,
                        ElAutocomplete,
                        ElCascaderPanel,
                        ElCascader,
                        ElColorPicker,
                        ElCheckboxGroup,
                        ElCheckbox,
                        ElDatePicker,
                        ElFormItem,
                        ElForm,
                        ElInputNumber,
                        ElInput,
                        ElMention,
                        ElRadioGroup,
                        ElRadioButton,
                        ElRadio,
                        ElRate,
                        ElSelect,
                        ElOptionGroup,
                        ElOption,

                        ElRow,
                        ElCol
                    ];

                    /**
                     * 提取行前缀
                     */
                    let linePrefix: any = document.lineAt(position).text.substring(0, position.character);
                    linePrefix = '<' + linePrefix.split('<').pop();

                    /**
                     * 生成标准的 CompletionItem 提示框
                     */
                    const renderCompletionItems = (data: any, isEvent: boolean = false) => {
                        const res = data.map((item: any, index: number) => {
                            const key = isEvent ? item.key.replace('@', '') : item.key;
                            const instance = new vscode.CompletionItem(`${item.key}⚡`, vscode.CompletionItemKind.Property);

                            // 如果不是 string 类型，则补上 v-bind 即 : 前缀
                            const insertText = item.type === 'string' || item.type === 'Function' || item.type === 'enum' ? key : `:${key}`;
                            instance.insertText = new vscode.SnippetString(insertText + '="${1:value}"');

                            instance.sortText = String(index);
                            instance.documentation = new vscode.MarkdownString(markdownString(item));
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
            },
            '@',
            ' '
        )
    );
}

export function deactivate() {}
