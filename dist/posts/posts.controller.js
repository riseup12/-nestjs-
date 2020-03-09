"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const post_model_1 = require("./post.model");
const nestjs_mongoose_crud_1 = require("nestjs-mongoose-crud");
class CreatePostDto {
}
__decorate([
    swagger_1.ApiProperty({ description: '贴子标题', example: '贴子标题1' }),
    class_validator_1.IsNotEmpty({ message: '前填写标题' }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({ description: '贴子内容', example: '贴子内容2' }),
    __metadata("design:type", String)
], CreatePostDto.prototype, "content", void 0);
let PostsController = class PostsController {
    constructor(model) {
        this.model = model;
    }
};
PostsController = __decorate([
    nestjs_mongoose_crud_1.Crud({
        model: post_model_1.Post
    }),
    common_1.Controller('posts'),
    swagger_1.ApiTags('贴子'),
    __param(0, nestjs_typegoose_1.InjectModel(post_model_1.Post)),
    __metadata("design:paramtypes", [Object])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map