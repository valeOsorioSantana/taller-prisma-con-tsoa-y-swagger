import {
    Controller,
    Get,
    Post,
    Route,
    Tags,
    Body,
    Path,
    Put,
    Delete,
  } from 'tsoa';
  import {
    createContact,
    getContacts,
    getContactById,
    updateContact,
    deleteContact,
  } from '../routess/contact.service';
  import { ContactInput } from '../models/contact.model';
  import { Contact } from '@prisma/client';
  
  @Route('contacts')
  @Tags('Contact')
  export class ContactController extends Controller {
    @Get()
    public async getAll(): Promise<Contact[]> {
      return getContacts();
    }
  
    @Get('{id}')
    public async getById(@Path() id: number): Promise<Contact | null> {
      return getContactById(id);
    }
  
    @Post()
    public async create(@Body() body: ContactInput): Promise<Contact> {
      return createContact(body);
    }
  
    @Put('{id}')
    public async update(@Path() id: number, @Body() body: Partial<ContactInput>): Promise<Contact> {
      return updateContact(id, body);
    }
  
    @Delete('{id}')
    public async delete(@Path() id: number): Promise<Contact> {
      return deleteContact(id);
    }
  }
  