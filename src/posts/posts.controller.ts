import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty } from 'class-validator'
import { InjectModel } from 'nestjs-typegoose';
import { Post as PostSchema } from './post.model'
import { ModelType } from '@typegoose/typegoose/lib/types';

import { Crud } from 'nestjs-mongoose-crud'

class CreatePostDto {
  @ApiProperty({ description: '贴子标题', example: '贴子标题1' })
  //必填验证
  @IsNotEmpty({ message: '前填写标题' })
  title: string
  @ApiProperty({ description: '贴子内容', example: '贴子内容2' })
  content: string
}
//控制器
@Crud({
  model: PostSchema
})
@Controller('posts')
@ApiTags('贴子')
export class PostsController {
  constructor(
    @InjectModel(PostSchema) private readonly model: ModelType<PostSchema>
  ) { }
}
  //get请求的路由
/*  @Get()
 @ApiOperation({ summary: '贴子列表' })
 async index() {
   return await this.postModel.find()
 }
 @Post()
 @ApiOperation({ summary: '创建贴子' })
 async create(@Body() cretaePostDto: CreatePostDto) {
   await this.postModel.create(cretaePostDto)
   return {
     success: true
   }
 }
 @Get(':id')
 @ApiOperation({ summary: '贴子详情' })
 async detail(@Param('id') id: string) {
   return await this.postModel.findById(id)
 }

 @Put(':id')
 @ApiOperation({ summary: '编辑贴子' })
 async update(@Param('id') id: string, @Body() update: CreatePostDto) {
   await this.postModel.findByIdAndUpdate(id, update)
   return {
     success: true
   }
 }
 @Delete(':id')
 @ApiOperation({ summary: '删除贴子' })
 async remove(@Param('id') id: string) {
   await this.postModel.findByIdAndDelete(id)
   return {
     success: true
   }
 }
}
*/