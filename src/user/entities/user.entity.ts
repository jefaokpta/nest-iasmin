import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn({type: 'bigint'})
    readonly id: number;
    @Column()
    readonly name: string;
    @Column({ unique: true })
    readonly email: string;
    @Column()
    readonly password: string;
    @CreateDateColumn({ name: 'created_at' })
    readonly createdAt: Date;
    @UpdateDateColumn({ name: 'updated_at' })
    readonly updatedAt: Date;
}
