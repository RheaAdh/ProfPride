import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRoomDto } from '../dtos/CreateRoom.dto';
import { UpdateRoomDto } from '../dtos/UpdateRoom.dto';
import { RoomService } from '../services/room.service';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Get()
  getRooms() {
    return this.roomService.findRooms();
  }

  @Post()
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.createRoom(createRoomDto);
  }

  @Patch(':id')
  async updateRoomById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRoomDto: UpdateRoomDto,
  ) {
    await this.roomService.updateRoom(id, updateRoomDto);
  }

  @Delete(':id')
  async deleteRoomById(@Param('id', ParseIntPipe) id: number) {
    await this.roomService.deleteRoom(id);
  }
}
