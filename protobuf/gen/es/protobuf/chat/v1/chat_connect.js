// @generated by protoc-gen-connect-es v1.4.0
// @generated from file protobuf/chat/v1/chat.proto (package protobuf.chat.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateChannelRequest, CreateChannelResponse, CreateDirectRequest, CreateDirectResponse, CreateGroupRequest, CreateGroupResponse, GetChatRequest, GetChatResponse, GetUserChatsRequest, GetUserChatsResponse } from "./chat_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service protobuf.chat.v1.ChatService
 */
export const ChatService = {
  typeName: "protobuf.chat.v1.ChatService",
  methods: {
    /**
     * @generated from rpc protobuf.chat.v1.ChatService.GetChat
     */
    getChat: {
      name: "GetChat",
      I: GetChatRequest,
      O: GetChatResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc protobuf.chat.v1.ChatService.GetUserChats
     */
    getUserChats: {
      name: "GetUserChats",
      I: GetUserChatsRequest,
      O: GetUserChatsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc protobuf.chat.v1.ChatService.CreateDirect
     */
    createDirect: {
      name: "CreateDirect",
      I: CreateDirectRequest,
      O: CreateDirectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc protobuf.chat.v1.ChatService.CreateGroup
     */
    createGroup: {
      name: "CreateGroup",
      I: CreateGroupRequest,
      O: CreateGroupResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc protobuf.chat.v1.ChatService.CreateChannel
     */
    createChannel: {
      name: "CreateChannel",
      I: CreateChannelRequest,
      O: CreateChannelResponse,
      kind: MethodKind.Unary,
    },
  }
};
