"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownString = void 0;
const markdownString = (item) => {
    let result = `## ${item.key} 属性\n`;
    if (item.describe) {
        result += `**描述**: ${item.describe}\n\n`;
    }
    if (item.type) {
        result += `**类型**: \`${item.type}\`\n\n`;
    }
    if (item.default) {
        result += `**默认值**: \`${item.default}\`\n\n`;
    }
    if (item.link) {
        result += `**文档链接**: ${item.link}\n\n`;
    }
    return result + '<br />\n';
};
exports.markdownString = markdownString;
//# sourceMappingURL=template.js.map