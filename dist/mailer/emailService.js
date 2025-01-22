"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const mailer_1 = __importDefault(require("./mailer"));
const path_1 = __importDefault(require("path"));
const ejs_1 = __importDefault(require("ejs"));
const networkLink_1 = __importDefault(require("../utilities/networkLink"));
const sendEmail = (to, subject, data) => __awaiter(void 0, void 0, void 0, function* () {
    // Path to the EJS template
    const templatePath = path_1.default.join(__dirname, 'mail.ejs');
    const { user, products, totalPrice, network, installments } = data;
    const html = yield ejs_1.default.renderFile(templatePath, { user, products, totalPrice, network: (0, networkLink_1.default)(network), installments });
    try {
        yield mailer_1.default.sendMail({
            from: 'Sporthouse Run',
            to,
            subject,
            html,
        });
        console.log('Email sent successfully');
    }
    catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
});
exports.sendEmail = sendEmail;
