import prisma from '../prisma/client';
import { ContactInput } from '../models/contact.model';

export const createContact = (data: ContactInput) => prisma.contact.create({ data });
export const getContacts = () => prisma.contact.findMany();
export const getContactById = (id: number) => prisma.contact.findUnique({ where: { id } });
export const updateContact = (id: number, data: Partial<ContactInput>) =>
  prisma.contact.update({ where: { id }, data });
export const deleteContact = (id: number) => prisma.contact.delete({ where: { id } });
