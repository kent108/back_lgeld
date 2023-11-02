import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Response,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('pictures')
@Controller('pictures')
// @UseGuards(AuthGuard('jwt'))
export class PicturesController {
  constructor(private readonly picturesService: PicturesService) {}

  // @Post()
  // create(@Body() createPictureDto: CreatePictureDto) {
  //   return this.picturesService.create(createPictureDto);
  // }

  @Get()
  findAll() {
    return this.picturesService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePictureDto: UpdatePictureDto) {
    return this.picturesService.update(+id, updatePictureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.picturesService.remove(+id);
  }

  @Get(':id')
  getImageById(
    @Param('id') id: string,
    @Res({ passthrough: true }) res,
  ): Promise<StreamableFile> {
    return this.picturesService.getImage(+id, res);
  }

  @Post()
  @UseInterceptors(FileInterceptor('monFichierKey'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return this.picturesService.create(file);
  }
}
