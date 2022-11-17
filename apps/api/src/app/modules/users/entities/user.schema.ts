import * as bcrypt from 'bcrypt';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true, trim: true, lowercase: true })
  email: string;

  @Prop({ required: true, trim: true })
  password: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  following: mongoose.Types.ObjectId;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  follower: mongoose.Types.ObjectId;
  @Prop({ type: 'string', maxlength: 200 })
  story: string;
  @Prop({
    default:
      'https://res.cloudinary.com/dk6bdrkbv/image/upload/v1658841812/mushfiqTanim/user_qcrqny_kcgfes.svg',
  })
  avatar: string;

  @Prop({ type: 'string', default: 'male' })
  gender: string;

  @Prop({ required: false })
  userName?: string;

  @Prop({
    enum: ['admin', 'user'],
    default: 'user',
  })
  role: string;
}

export interface UserDocument extends User, mongoose.Document {
  comparePassword(password: string): Promise<boolean>;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  const user = this as UserDocument;

  return await bcrypt.compare(password, user.password);
};
