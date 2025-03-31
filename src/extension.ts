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
import ElSelectV2 from './components/el-select-v2';
import ElSlider from './components/el-slider';
import ElSwitch from './components/el-switch';
import ElTimePicker from './components/el-time-picker';
import ElTimeSelect from './components/el-time-select';
import ElTransfer from './components/el-transfer';
import ElTreeSelect from './components/el-tree-select';
import ElUpload from './components/el-upload';
import ElAvatar from './components/el-avatar';
import ElBadge from './components/el-badge';
import ElCalendar from './components/el-calendar';
import ElCard from './components/el-card';
import ElCarousel from './components/el-carousel';
import ElCarouselItem from './components/el-carousel-item';
import ElCollapseItem from './components/el-collapse-item';
import ElCollapse from './components/el-collapse';
import ElDescriptionsItem from './components/el-descriptions-item';
import ElDescriptions from './components/el-descriptions';
import ElEmpty from './components/el-empty';
import ElImageViewer from './components/el-image-viewer';
import ElImage from './components/el-image';
import ElPagination from './components/el-pagination';
import ElProgress from './components/el-progress';
import ElResult from './components/el-result';
import ElSkeletonItem from './components/el-skeleton-item';
import ElSkeleton from './components/el-skeleton';
import ElTableColumn from './components/el-table-column';
import ElTable from './components/el-table';
import ElTableV2 from './components/el-table-v2';
import ElCheckTag from './components/el-check-tag';
import ElTag from './components/el-tag';
import ElTimelineItem from './components/el-timeline-item';
import ElTour from './components/el-tour';
import ElTourStep from './components/el-tour-step';
import ElTree from './components/el-tree';
import ElTreeV2 from './components/el-tree-v2';
import ElStatistic from './components/el-statistic';
import ElSegmented from './components/el-segmented';
import ElAffix from './components/el-affix';
import ElBreadcrumbItem from './components/el-breadcrumb-item';
import ElBreadcrumb from './components/el-breadcrumb';
import ElMenuItemGroup from './components/el-menu-item-group';
import ElSubMenu from './components/el-sub-menu';
import ElMenu from './components/el-menu';
import ElPageHeader from './components/el-page-header';
import ElStep from './components/el-step';
import ElSteps from './components/el-steps';
import ElTabPane from './components/el-tab-pane';
import ElTabs from './components/el-tabs';
import ElAlert from './components/el-alert';
import ElDialog from './components/el-dialog';
import ElDrawer from './components/el-drawer';
import ElPopconfirm from './components/el-popconfirm';
import ElPopover from './components/el-popover';
import ElTooltip from './components/el-tooltip';
import ElDivider from './components/el-divider';

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
                        ElSelectV2,
                        ElSelect,
                        ElOptionGroup,
                        ElOption,
                        ElCollapseItem,
                        ElCollapse,
                        ElRow,
                        ElCol,
                        ElSlider,
                        ElSwitch,
                        ElTimePicker,
                        ElTimeSelect,
                        ElTransfer,
                        ElTreeSelect,
                        ElUpload,
                        ElAvatar,
                        ElBadge,
                        ElCalendar,
                        ElCard,
                        ElCarouselItem,
                        ElCarousel,
                        ElDescriptionsItem,
                        ElDescriptions,
                        ElEmpty,
                        ElImageViewer,
                        ElImage,
                        ElPagination,
                        ElProgress,
                        ElResult,
                        ElSkeletonItem,
                        ElSkeleton,
                        ElTableV2,
                        ElTableColumn,
                        ElTable,
                        ElCheckTag,
                        ElTag,
                        ElTimelineItem,
                        ElTourStep,
                        ElTour,
                        ElTree,
                        ElTreeV2,
                        ElStatistic,
                        ElSegmented,
                        ElAffix,
                        ElBreadcrumbItem,
                        ElBreadcrumb,
                        ElMenuItemGroup,
                        ElSubMenu,
                        ElMenu,
                        ElPageHeader,
                        ElSteps,
                        ElStep,
                        ElTabPane,
                        ElTabs,
                        ElAlert,
                        ElDialog,
                        ElDrawer,
                        ElPopconfirm,
                        ElPopover,
                        ElTooltip,
                        ElDivider
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
