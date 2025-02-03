import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema'; // Import your schema

describe('UsersService', () => {
    let service: UsersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                MongooseModule.forRoot('mongodb+srv://your_connection_string', { dbName: 'your_db_name' }), // Replace with your actual connection string
                MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
            ],
            providers: [UsersService], // No need to provide IsEmailUnique here for this test
        }).compile();

        service = module.get<UsersService>(UsersService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    // Add a simple test to check if the model is injected
    it('should inject the user model', () => {
        expect(service['userModel']).toBeDefined(); // Access the private userModel property for testing
    });
});