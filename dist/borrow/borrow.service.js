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
exports.BorrowService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entities/user.entity");
const typeorm_2 = require("typeorm");
const book_entity_1 = require("../book/entities/book.entity");
const borrow_entity_1 = require("./entities/borrow.entity");
let BorrowService = class BorrowService {
    constructor(userREP, bookREP, borrowREP) {
        this.userREP = userREP;
        this.bookREP = bookREP;
        this.borrowREP = borrowREP;
    }
    async create(createBorrowDto) {
        const { userID, bookID } = createBorrowDto;
        const findUser = await this.userREP.findOneBy({ id: userID });
        if (!findUser)
            throw new common_1.UnauthorizedException('User not found');
        const findBook = await this.bookREP.findOneBy({ id: bookID });
        if (!findBook)
            throw new common_1.UnauthorizedException('Book not found');
        const borrow = this.borrowREP.create({
            user: findUser,
            book: findBook,
            donatedAt: new Date(),
        });
        return await this.borrowREP.save(borrow);
    }
    findAll() {
        return `This action returns all borrow`;
    }
    findOne(id) {
        return `This action returns a #${id} borrow`;
    }
    update(id, updateBorrowDto) {
        return `This action updates a #${id} borrow`;
    }
    remove(id) {
        return `This action removes a #${id} borrow`;
    }
};
exports.BorrowService = BorrowService;
exports.BorrowService = BorrowService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(book_entity_1.Book)),
    __param(2, (0, typeorm_1.InjectRepository)(borrow_entity_1.Borrow)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BorrowService);
//# sourceMappingURL=borrow.service.js.map