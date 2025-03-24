import * as vscode from 'vscode';
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
import ElRow from './components/el-row';
import ElCol from './components/el-col';
import { markdownString } from './utils/template';

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
                        
                        ElInput,
                        ElRow,
                        ElCol,
                    ];

                    /**
                     * 提取行前缀
                     */
                    let linePrefix: any = document.lineAt(position).text.substring(0, position.character);
                    linePrefix = '<' + linePrefix.split('<').pop();

                    console.log('linePrefix', linePrefix);

                    /**
                     * 生成标准的 CompletionItem 提示框
                     */
                    const renderCompletionItems = (data: any, isEvent: boolean = false) => {
                        const res = data.map((item: any, index: number) => {
                            const key = isEvent ? item.key.replace('@', '') : item.key;
                            const instance = new vscode.CompletionItem(`${item.key}⚡`, vscode.CompletionItemKind.Property);

                            instance.sortText = String(index);
                            instance.insertText = new vscode.SnippetString(key + '="${1:value}"');
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
