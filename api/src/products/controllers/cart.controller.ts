import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateCartDto} from "../dto/create.cart.dto";
import {CartService} from "../service/cart.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Cart} from "../model/cart.model";


@ApiTags('Cart')
@Controller('api/cart')
export class CartController {

    constructor(private cartService: CartService) {}

    @ApiOperation({summary: 'Create cart'})
    @ApiResponse({status: 200, type: Cart})
    @Post()
    create(@Body() cartDto: CreateCartDto){
        return this.cartService.createCart(cartDto);
    }

    @ApiOperation({summary: 'Get cart'})
    @ApiResponse({status: 200, type: [Cart]})
    @Get()
    getAll() {
        return this.cartService.getAllCarts()
    }

    @ApiOperation({summary: 'One cart'})
    @ApiResponse({status: 200, type: [Cart]})
    @Get('/:id')
    getById(@Param('id') id: number) {
        return this.cartService.getCartById(id);
    }

}

